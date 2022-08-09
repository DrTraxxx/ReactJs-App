export const Day = ({slots}) => {
    return (
         
        <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                Friday
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">11/01/2022</p>
            <ul className="my-4 space-y-3">
                <li>
                    {slots.map(app => (<span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">app</span>))}
                </li>
            </ul>
        </div>

    )
}