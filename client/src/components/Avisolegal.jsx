import React from 'react';
import { Link } from 'react-router-dom';
import './Avisolegal.css'

const Avisolegal = () => {
    return <div className='aviso-legal'>
        <h1>AVISO LEGAL</h1>
        <p>POPCLAIM, provisto con NIF/CIF B84666304, dirección C/ Gran Vía 57 -
            Madrid (Madrid), no puede asumir ninguna responsabilidad derivada del
            uso incorrecto, inapropiado o ilícito de la información aparecida en las
            páginas de Internet de www.popclaim.herokuapp.com
            Con los límites establecidos en la ley, www.popclaim.herokuapp.com no
            asume ninguna responsabilidad derivada de la falta de veracidad,
            integridad, actualización y precisión de los datos o informaciones que se
            contienen en sus páginas de Internet.
            Los contenidos e información no vinculan a
            www.popclaim.herokuapp.com ni constituyen opiniones, consejos o
            asesoramiento legal, médico ni de ningún tipo pues se trata meramente
            de un servicio ofrecido con carácter informativo y divulgativo.
            Las páginas de Internet de www.popclaim.herokuapp.com pueden
            contener enlaces (links) a otras páginas de terceras partes que
            www.popclaim.herokuapp.com no puede controlar. Por lo tanto,
            www.popclaim.herokuapp.com no puede asumir responsabilidades por el
            contenido que pueda aparecer en páginas de terceros.
            Los textos, imágenes, sonidos, animaciones, software y el resto de
            contenidos incluidos en este website son propiedad exclusiva de
            www.popclaim.herokuapp.com o sus licenciantes. Cualquier acto de
            transmisión, distribución, cesión, reproducción, almacenamiento o
            comunicación pública total o parcial, debe contar con el consentimiento
            expreso de  www.popclaim.herokuapp.com.
            Asimismo, para acceder a algunos de los servicios que
            www.popclaim.herokuapp.com ofrece a través del website deberá
            proporcionar algunos datos de carácter personal. En cumplimiento de lo
            establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y
            del Consejo, de 27 de abril de 2016, relativo a la protección de las
            personas físicas en lo que respecta al tratamiento de datos personales y a
            la libre circulación de estos datos le informamos que, mediante la
            cumplimentación de los presentes formularios, sus datos personales
            quedarán incorporados y serán tratados en los ficheros de LONGEVITAS
            LABS, S.L. con el fin de poderle prestar y ofrecer nuestros servicios así
            como para informarle de las mejoras del sitio Web. Asimismo, le
            informamos de la posibilidad de que ejerza los derechos de acceso,
            rectificación, cancelación y oposición de sus datos de carácter personal,
            manera gratuita mediante email a info@popclaim.com o en la dirección
            C/ Gran Vía 57 - Madrid (Madrid). </p>
            <Link to="/" className='login-btn btn-padding'>Volver</Link>
    </div>;
};

export default Avisolegal;
