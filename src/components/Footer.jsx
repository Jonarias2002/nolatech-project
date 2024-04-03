import icon from "../assets/icongrab.png"

function Footer() {
    return (
        <footer className="py-6">
            <div className="container flex sm:flex-row flex-col sm:justify-center items-center mx-auto justify-between px-4">
                <div className="w-1/3 text-center">
                <p className="text-gray-800">
                    Cumque officiis iure voluptatum minus. <br />
                    Laborum eaque quo aspernatur troldas dsd. <br />
                    Lorem ipsum dolor, sit amet consectetur.
                    </p>
                </div>
                <div className="flex-1 flex items-center justify-center h-20 w-1/3">
                    <img src={icon}  width={125} alt="" />
                </div>
                <div className="w-1/3 text-center">
                    <p className="text-gray-800">Lorem ipsum dolor sit, amet <br />  Laborum eaque quo aspernatur.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer