export interface CustomAlert {
	title?: string;
	body: string;
	cancelButton?: boolean; // Esta propiedad es para indicar si va a existir el boton de cancelar
	cancelButtonText?: string; // Definir el texto que va a tener el boton de cancelar
	acceptButtonText?: string; // Definir el texto del boton de aceptar
	type?: 'success' | 'error';
}