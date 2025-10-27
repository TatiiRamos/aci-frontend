const contentValidatedError = {
  en: {
    name: {
      empty: 'Please enter a name',
      length: 'The name must have at least 2 characters',
      letter: 'The name can only contain letters'
    },
    lastName: {
      empty: 'Please enter a last name',
      length: 'The last name must have at least 2 characters',
      letter: 'The last name can only contain letters'
    },
    phone: {
      empty: 'Please enter a phone number',
      number: 'Enter a valid phone number'
    },
    country: {
      empty: 'Please enter a country',
      letter: 'The country must only contain letters'
    },
    city: {
      empty: 'Please enter a city',
      letter: 'The city must only contain letters'
    },
    email: {
      empty: 'Please enter an email address',
      isEmail: 'Capture a valid email'
    },
    password: {
      empty: 'Enter a Password the field must not be empty',
      isPass:
        'The password must be at least 8 characters long, contain a number, an uppercase and lowercase letter'
    },
    repeatPassword: {
      empty: 'Please re-enter the password',
      isPass: 'The passwords do not match'
    },
    termsConditions: {
      isAccepeted: 'You must accept the terms and conditions'
    },
    emailCode: {
      empty: 'Please enter the code',
      isPass: 'Enter a valid code'
    }
  },
  es: {
    name: {
      empty: 'Por favor ingresa un nombre',
      length: 'El nombre debe tener al menos 2 caracteres',
      letter: 'El nombre sólo puede contener letras'
    },
    lastName: {
      empty: 'Por favor ingresa un apellido',
      length: 'El apellido debe tener al menos 2 caracteres',
      letter: 'El apellido sólo puede contener letras'
    },
    phone: {
      empty: 'Por favor ingresa un Teléfono',
      number: 'Ingresa un número de teléfono válido'
    },
    country: {
      empty: 'Por favor ingresa un país',
      letter: 'El país solo puede contener letras'
    },
    city: {
      empty: 'Por favor ingresa una ciudad',
      letter: 'La cuidad solo puede contener letras'
    },
    email: {
      empty: 'Por favor Ingresa un Email',
      isEmail: 'Ingrese un correo electrónico valido'
    },
    password: {
      empty: 'Ingresa una Contraseña el campo no debe estar vació',
      isPass:
        'La contraseña debe tener al menos 8 caracteres, contener un numero, una letra mayúscula y minúscula'
    },
    repeatPassword: {
      empty: 'Por favor reingresa la contraseña',
      isPass: 'Las contraseñas no coinciden'
    },
    termsConditions: {
      isAccepeted: 'Debe aceptar los términos y condiciones'
    },
    emailCode: {
      empty: 'Por favor ingresa el código',
      isPass: 'Ingresa un código válido'
    }
  }
}

export default contentValidatedError
