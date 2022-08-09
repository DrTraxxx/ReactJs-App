import { useEffect, useState } from "react"
import DoctorCard from "./DoctorCard"


const dummyData = [
    {
        id : 1,
       name: "Pet Clinic1",
       specialty:"Test1",
       city:"Test Citty"

    },{
        id : 2,
        name: "Pet Clinic2",
        specialty:"Test2",
        city:"Test Citty"

     },{
        id : 3,
        name: "Pet Clinic3",
        specialty:"Test3",
        city:"Test Citty"

     },{
        id : 4,
        name: "Pet Clinic4",
        specialty:"Test4",
        city:"Test Citty"

     },{
        id : 5,
        name: "Pet Clinic5",
        specialty:"Test5",
        city:"Test Citty"

     },{
        id : 6,
        name: "Pet Clinic5",
        specialty:"Test5",
        city:"Test Citty"

     },{
        id : 7,
        name: "Pet Clinic5",
        specialty:"Test5",
        city:"Test Citty"

     },{
        id : 8,
        name: "Pet Clinic5",
        specialty:"Test5",
        city:"Test Citty"

     },{
        id : 9,
        name: "Pet Clinic5",
        specialty:"Test5",
        city:"Test Citty"

     },{
        id : 10,
        name: "Pet Clinic5",
        specialty:"Test5",
        city:"Test Citty"

     },{
        id : 11,
        name: "Pet Clinic5",
        specialty:"Test5",
        city:"Test Citty"

     }] 

const DoctorsList = () =>
{
    const [docData, setDocdata] = useState([])

    useEffect(() => {
        setDocdata(x => [...dummyData])
    },[])

    return (
            <div className="dark:bg-gray-500">
                <ul className="list-none md:list-inside">
                    {docData.map(x => (
                        <li key={x.id} className="md:ml-5">
                            <DoctorCard doc={x} />
                        </li>))}
                </ul>
            </div>
    )
}

export default DoctorsList;