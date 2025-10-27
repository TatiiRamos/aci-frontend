// data.ts

export interface Pais {
  id: number
  titulo: string
  subtitulo: string
  descripcion: string
  fotos: {
    header: string
    descripcion: string[]
  }
}

export interface Estacion {
  id: number
  titulo: string
  subtitulo: string
  descripcion: string
  foto: string
  persona_responsable: string
  gps: string
  fk_pais: number
}

export interface Internship {
  id: number
  titulo: string
  subtitulo: string
  descripcion: string
  foto: string
  pdf: string
  instructor: string
  fk_estacion: number
}

export interface Hospedaje {
  id: number
  titulo: string
  hotel_nombre: string
  hotel_estrellas: number
  descripcion: string
  estado: string
  ubicacion: string
  capacidad_personas: number
  fotos: string[]
  info: string
  fk_estacion: number
}

export interface Usuario {
  id: number
  nombre: string
  correo: string
  telefono: string
  reserva: Reserva
}

export interface Reserva {
  id: number
  tipo_actividad: string
  pais: string
  estacion: string
  fechas: string[]
  hospedaje: string
  reserva_img: string
}

export const paises: Pais[] = [
  {
    id: 1,
    titulo: 'Argentina',
    subtitulo: 'País de diversidad natural',
    descripcion:
      'Argentina es un país ubicado en el extremo sur de América del Sur...',
    fotos: {
      header: 'argentina_header.jpg',
      descripcion: ['argentina_foto1.jpg', 'argentina_foto2.jpg']
    }
  }
  // Agregar más países si es necesario
]

export const estaciones: Estacion[] = [
  {
    id: 1,
    titulo: 'Estación Biológica Patagonia',
    subtitulo: 'Preservando la biodiversidad en la Patagonia',
    descripcion:
      'La Estación Biológica Patagonia se encuentra en la región de la Patagonia argentina...',
    foto: 'patagonia_estacion.jpg',
    persona_responsable: 'Dr. Carlos Rodriguez',
    gps: '40.8333° S, 63.0000° W',
    fk_pais: 1
  }
  // Agregar más estaciones si es necesario
]

export const internships: Internship[] = [
  {
    id: 1,
    titulo: 'Internship en Conservación de Bosques',
    subtitulo:
      'Aprende sobre la importancia de los bosques en nuestro ecosistema',
    descripcion:
      'Este internship te permite explorar y contribuir a la conservación de los bosques...',
    foto: 'conservacion_bosques.jpg',
    pdf: 'conservacion_bosques_info.pdf',
    instructor: 'Dra. Ana López',
    fk_estacion: 1
  }
  // Agregar más internships si es necesario
]

export const hospedajes: Hospedaje[] = [
  {
    id: 1,
    titulo: 'Hospedaje EcoRefugio',
    hotel_nombre: 'EcoRefugio Patagonia',
    hotel_estrellas: 4,
    descripcion:
      'EcoRefugio Patagonia ofrece una experiencia de hospedaje sostenible en plena naturaleza...',
    estado: 'Activo',
    ubicacion: 'Patagonia, Argentina',
    capacidad_personas: 30,
    fotos: ['ecorefugio_foto1.jpg', 'ecorefugio_foto2.jpg'],
    info: 'Servicios: Restaurante, Wi-Fi, Excursiones guiadas',
    fk_estacion: 1
  }
  // Agregar más hospedajes si es necesario
]

export const usuarios: Usuario[] = [
  {
    id: 1,
    nombre: 'Carlos Pérez',
    correo: 'carlos@example.com',
    telefono: '123-456-7890',
    reserva: {
      id: 101,
      tipo_actividad: 'Internship en Conservación de Bosques',
      pais: 'Argentina',
      estacion: 'Estación Biológica Patagonia',
      fechas: ['2024-06-15', '2024-06-22'],
      hospedaje: 'EcoRefugio Patagonia',
      reserva_img: ''
    }
  },
  {
    id: 2,
    nombre: 'María Rodríguez',
    correo: 'maria@example.com',
    telefono: '987-654-3210',
    reserva: {
      id: 102,
      tipo_actividad: 'Internship en Observación de Aves',
      pais: 'Colombia',
      estacion: 'Estación Biológica Amazonía',
      fechas: ['2024-07-10', '2024-07-17'],
      hospedaje: 'EcoLodge Amazonía',
      reserva_img: ''
    }
  },
  {
    id: 3,
    nombre: 'Alejandro Gómez',
    correo: 'alejandro@example.com',
    telefono: '555-123-4567',
    reserva: {
      id: 103,
      tipo_actividad: 'Internship en Investigación Marina',
      pais: 'Chile',
      estacion: 'Estación Biológica Costa Central',
      fechas: ['2024-08-05', '2024-08-12'],
      hospedaje: 'EcoHostel Costa Central',
      reserva_img: ''
    }
  }
]
