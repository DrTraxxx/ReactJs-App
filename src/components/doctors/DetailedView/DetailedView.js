import { useState, useEffect } from "react"
import CertificatesList from './Certifications/CertificatesList'
import PatientClendar from "./PacientCalendar/PatientCalendar"

const dummyDoc = {
    id: 10,
    name: "Pet Clinic5",
    specialty: "Test5",
    city: "Test Citty",
    certifications: [
        { _id: 1, name: "DermaSertification", date: "12/01/2018" },
        { _id: 2, name: "GroomingSertification", date: "12/01/2017" },
        { _id: 3, name: "GroomingSertification", date: "12/01/2017" },
        { _id: 4, name: "GroomingSertification", date: "12/01/2017" }

    ]
}

const DetailView = () => {

    const [doc, setDoc] = useState({ id: "", name: "", specialty: "", city: "", certifications: [] })

    useEffect(() => {
        setDoc(dummyDoc)
    }, [doc])

    console.log(doc)
    return (
        <div className="md:flex contents">
            <div className="md:ml-5 content-start">
                <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://thumbs.dreamstime.com/b/welsh-corgi-dog-sitting-chair-laptop-working-home-can-be-used-card-brochures-poster-sticker-etc-vector-image-182129720.jpg" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{doc.name}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{doc.city}</p>
                    </div>
                </div>
                <article className="md:mb-3 mt-3 text-base font-normal text-gray-500 dark:text-gray-100">
                    <label>Description/Bio</label>
                    <p>Here is some bio</p>
                </article>
                <CertificatesList items={doc.certifications} />
            </div>
            <div className="md:ml-10">
            <PatientClendar />
            </div>
        </div>
    )
}

export default DetailView