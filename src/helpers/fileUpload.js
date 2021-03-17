//esto resibe el archivo y retorna el url de la imgen subida


export const fileUpload = async ( file ) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dx0pryfzn/upload';

    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file', file );

    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            return null;
        }

    } catch (err) {
        throw err;
    }


    // return url de la imagen
}

// export const fileUpload = async( file )=>{
//     const cloudUrl = 'https://api.cloudinary.com/v1_1/da0vqwplu/upload'

//     const fromData = new FormData(); //como hicimos en el postman
//     fromData.append('upload_preset','react-journal');
//     fromData.append('file',file);
    
//     try{
//         const resp = await fetch(cloudUrl,{
//             method:'POST', 
//             body: fromData //mandamos el cuerpo
//         }) ;

//         if( resp.ok ){ //si todo sale bien
//             const cloudResp = await resp.json();
//             return cloudResp.secure_url;

//         }else {
//             return null;
//         }
//     }catch(err){
//         throw err
//     }

// }