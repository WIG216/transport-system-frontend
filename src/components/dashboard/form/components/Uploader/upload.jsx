import { useState } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useFormikContext } from 'formik'



function Uploader(name) {

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected file")
    const { errors, touched } = useFormikContext();

    return (
        <main>
            <form
                className='flex justify-center items-center border-2 border-dashed h-[60px] p-4 cursor-pointer rounded-md border-slate-400'
                onClick={() => document.querySelector(".input-field").click()}
            >
                <input name={name} type="file" accept='image/*' className='input-field' hidden
                    onChange={({ target: { files } }) => {
                        files[0] && setFileName(files[0].name)
                        if (files) {
                            setImage(URL.createObjectURL(files[0]))
                        }
                    }}
                />
                    <ErrorMessage error={errors[name]} visible={touched[name]} />

                {image ?
                    <img src={image} width={90} height={90} alt={fileName} />
                    :
                    <>
                        <MdCloudUpload color='#1475cf' size={35} />
                        <p className='pl-2'>Browse Files to upload</p>
                    </>
                }

            </form>
            <section className='mt-2 flex justify-between items-center px-4 py-3 border rounded-md bg-[#e9f0ff] '>
                <AiFillFileImage color='#1475cf' />
                <span className='flex items-center'>
                    {fileName} -
                    <MdDelete
                        onClick={() => {
                            setFileName("No selected File")
                            setImage(null)
                        }}
                    />
                </span>
            </section>
        </main>
    )
}

export default Uploader
