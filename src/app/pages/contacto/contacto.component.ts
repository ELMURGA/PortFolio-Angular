import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactForm } from '../../models';

/**
 * Componente de contacto con formulario reactivo
 */
@Component({
    selector: 'app-contacto',
    standalone: false,
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
    contactForm!: FormGroup;
    formStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
    errorMessage = '';

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.initForm();
    }

    /**
     * Inicializa el formulario reactivo con validaciones
     */
    private initForm(): void {
        this.contactForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            telefono: [''],
            asunto: ['', Validators.required],
            mensaje: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    /**
     * Obtiene un control del formulario
     */
    getControl(name: keyof ContactForm) {
        return this.contactForm.get(name);
    }

    /**
     * Verifica si un campo tiene error
     */
    hasError(name: keyof ContactForm, error: string): boolean {
        const control = this.getControl(name);
        return control?.touched && control?.hasError(error) || false;
    }

    /**
     * Verifica si el formulario es válido
     */
    isFormValid(): boolean {
        return this.contactForm.valid;
    }

    /**
     * Maneja el envío del formulario
     */
    async onSubmit(): Promise<void> {
        if (!this.isFormValid()) {
            // Marcar todos los campos como touched para mostrar errores
            Object.keys(this.contactForm.controls).forEach(key => {
                this.contactForm.get(key)?.markAsTouched();
            });
            return;
        }

        this.formStatus = 'submitting';

        try {
            const formData = this.contactForm.value as ContactForm;

            // Enviar a Formspree
            const response = await fetch('https://formspree.io/f/mjkjzrrr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                this.formStatus = 'success';
                this.contactForm.reset();
            } else {
                throw new Error('Error al enviar el formulario');
            }
        } catch (error) {
            this.formStatus = 'error';
            this.errorMessage = error instanceof Error ? error.message : 'Error desconocido';
            console.error('Error al enviar formulario:', error);
        }
    }

    /**
     * Reinicia el estado del formulario
     */
    resetFormStatus(): void {
        this.formStatus = 'idle';
        this.errorMessage = '';
    }
}
