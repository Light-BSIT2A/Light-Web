export default function Tab(param) {
    let isTab1 = param.var === "W";
    const activeTab = "text-lightest-pink border-pink active";
    const inactiveTab = "border-transparent hover:text-peach hover:border-pink";
    
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    function changeTabs() {
        if(isTab1){
            param.setter("NW")
        } else {
            param.setter("W")
        }
    }
    
    return (
        <div className="text-sm font-medium text-center text-peach border-b border-light-pink">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                    <button
                        className={classNames(isTab1 ? activeTab : inactiveTab, "inline-block p-4 rounded-t-lg border-b-2")}
                        onClick={changeTabs}
                    >
                        Working Student
                    </button>
                </li>
                <li className="mr-2">
                    <button
                        className={classNames(isTab1 ? inactiveTab : activeTab, "inline-block p-4 rounded-t-lg border-b-2")}
                        onClick={changeTabs}
                    >
                        Non-working Student
                    </button>
                </li>
            </ul>
        </div>
    );
}