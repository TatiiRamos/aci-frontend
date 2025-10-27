const nameRegex: RegExp = /^[A-Za-z\s]+$/
const emailRegex: RegExp = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
const passwordRegex: RegExp =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
const phoneRegex: RegExp = /^[+\d\s]+$/

export const validateCheckBox = (value: boolean) => {
  if (value !== true) {
    return 'Debe aceptar los terminos y condiciones'
  }
}

export const validatePhone = (value: string): string | undefined => {
  if (!value) {
    return 'Ingresa un número de teléfono válido'
  }
  if (!phoneRegex.test(value)) {
    return 'Ingresa un número de teléfono válido'
  }
}

export const validateNombre = (value: string): string | undefined => {
  if (value.trim() === '') {
    return 'Por favor ingresa tu nombre'
  }
  if (!nameRegex.test(value)) {
    return 'El nombre solo puede contener letras'
  }
}

export const validateApellido = (value: string): string | undefined => {
  if (!value) {
    return 'Por favor ingresa tu apellido'
  }
  if (!nameRegex.test(value)) {
    return 'El Apellido solo puede contener letras'
  }
}

export const validateCountry = (value: string): string | undefined => {
  if (!value) {
    return 'Por favor ingresa tu país'
  }
  if (!nameRegex.test(value)) {
    return 'El pais solo puede contener letras'
  }
}

export const validateCity = (value: string): string | undefined => {
  if (!value) {
    return 'Por favor ingresa tu ciudad'
  }
  if (!nameRegex.test(value)) {
    return 'La ciudad solo puede contener letras'
  }
}

export const validateEmail = (value: string): string | undefined => {
  if (!value) {
    return 'Ingresa un Email el campo no debe estar vacio'
  }
  if (!emailRegex.test(value)) {
    return 'Correo electrónico inválido el correo debe contener {@ .}'
  }
}

export const validatePassword = (value: string): string | undefined => {
  if (!value) {
    return 'Ingresa una Contraseña el campo no debe estar vacio'
  }
  if (!passwordRegex.test(value)) {
    return 'La contraseña debe tener al menos 8 caracteres, contener una letra mayúscula y minúscula'
  }
}
export const validateLoginPassword = (value: string): string | undefined => {
  if (!value) {
    return 'Ingresa una Contraseña el campo no debe estar vacio'
  }
}
