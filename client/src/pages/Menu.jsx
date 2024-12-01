const Menu = () => {
  return (
    <div className='container mx-auto px-6 py-10'>
      <h2 className='text-3xl font-bold text-center mb-10'>
        Actividades Realizadas en el Curso
      </h2>

      <div className='space-y-6'>
        <div className='bg-gray-100 p-6 rounded-lg shadow'>
          <h3 className='text-2xl font-semibold mb-4'>
            Unidad 1: Definición de requisitos y planificación inicial
          </h3>
          <ul className='list-disc list-inside space-y-2'>
            <li>
              Se elaboró un Backlog inicial basado en los requerimientos
              establecidos mediante la metodología PMI (Project Management
              Institute).
            </li>
            <li>
              Se adoptó la metodología ágil SCRUM para la planificación, diseño
              y desarrollo de la aplicación web, definiendo roles, entregables y
              objetivos claros.
            </li>
          </ul>
        </div>

        <div className='bg-gray-100 p-6 rounded-lg shadow'>
          <h3 className='text-2xl font-semibold mb-4'>
            Unidad 2: Estimación y planificación de tareas
          </h3>
          <ul className='list-disc list-inside space-y-2'>
            <li>
              Se realizaron estimaciones detalladas para el Product Backlog y el
              Sprint Backlog, utilizando los requerimientos obtenidos en la
              etapa de definición.
            </li>
            <li>
              Las estimaciones incluyeron la asignación de prioridades, tiempos
              y recursos necesarios para cada tarea del proyecto.
            </li>
          </ul>
        </div>

        <div className='bg-gray-100 p-6 rounded-lg shadow'>
          <h3 className='text-2xl font-semibold mb-4'>
            Unidad 3: Desarrollo e iteraciones
          </h3>
          <ul className='list-disc list-inside space-y-2'>
            <li>
              Se desarrollaron las fases iniciales de los sprints, implementando
              funcionalidades clave del proyecto.
            </li>
            <li>
              Se llevaron a cabo revisiones periódicas de los avances de cada
              sprint, realizando ajustes necesarios según el progreso y los
              objetivos alcanzados.
            </li>
          </ul>
        </div>

        <div className='bg-gray-100 p-6 rounded-lg shadow'>
          <h3 className='text-2xl font-semibold mb-4'>
            Unidad 4: Revisión y mejora continua
          </h3>
          <ul className='list-disc list-inside space-y-2'>
            <li>
              Se establecieron reuniones de revisión y retrospectiva al final de
              cada sprint para evaluar el desempeño del equipo, identificar
              oportunidades de mejora y ajustar el enfoque del proyecto según
              los requerimientos cambiantes.
            </li>
            <li>
              Se realizaron ajustes finales al proyecto, asegurando el
              cumplimiento de los objetivos definidos y la calidad del producto
              entregado.
            </li>
          </ul>
        </div>
      </div>

      <h2 className='text-3xl font-bold text-center mt-16 mb-10'>
        Sistema Implementado
      </h2>

      <div className='bg-gray-100 p-6 rounded-lg shadow space-y-4'>
        <p>
          El sistema fue desarrollado utilizando las siguientes tecnologías:
        </p>
        <ul className='list-disc list-inside space-y-2'>
          <li>
            <strong>React.js:</strong> Framework para la creación de interfaces
            de usuario dinámicas y modernas.
          </li>
          <li>
            <strong>JavaScript (JS):</strong> Lenguaje principal para la
            implementación de lógica y funcionalidades del proyecto.
          </li>
          <li>
            <strong>Tailwind CSS:</strong> Framework de estilos utilitario que
            permitió aplicar un diseño moderno, limpio y totalmente responsivo,
            optimizando el proceso de desarrollo de la interfaz.
          </li>
        </ul>
        <p>
          Este enfoque permitió construir una aplicación web eficiente,
          escalable y orientada a la experiencia del usuario, cumpliendo con los
          estándares de desarrollo ágil y adaptándose a los requerimientos
          establecidos.
        </p>
      </div>
    </div>
  );
};

export default Menu;
