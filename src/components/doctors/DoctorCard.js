import { doctorCard } from "./docors.tailwind/doctors.tailwind"
import {Link,useNavigate} from 'react-router-dom'

const DoctorCard = ({doc}) => {
    
    const navigate = useNavigate();
  
    const navigationHandler = () => {
        navigate(`${doc.id}`)
    }

    return (
            <div className={doctorCard.cardBody}>
                <img className={doctorCard.imageStyle} src={doctorCard.imageUrl} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{doc.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{doc.specialty} .{doc.city}</p>
                    <button onClick={navigationHandler}  className={doctorCard.shceduleButton}>Schedule Session</button>
                </div>
            </div>
    )

}

export default DoctorCard