import { CertificatesItem } from "./CertificateItem"


const CertificatesList = ({items}) => {
    
    return (
        
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
             {items.map(x => (<CertificatesItem key={x._id} item={x}/>))}
        </ol>
    )
} 

export default CertificatesList