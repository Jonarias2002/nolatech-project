import pic1 from "../assets/Pic1.png"

function Section() {
  return (
    <section className="min-h-screen flex pl-10 py-10 md:flex-row flex-col items-center">
        <div className="flex-1">
        <div className="md:text-left text-center">
            <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-black font-bold">
                Lorem ipsum <br /> dolor sit amet.
            </h1>
            <p className="mt-4 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facilis vero laudantium quod perspiciatis veniam et, unde omnis culpa sequi ea libero quae quaerat autem ex distinctio ut! Nemo, possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea voluptas praesentium vitae dolores quo soluta molestiae doloribus expedita amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, ea. Labore ullam dicta delectus libero, eum voluptatem eligendi. Quidem animi explicabo dolor nobis commodi debitis mollitia nam earum aliquam maiores! Ex sit, officia nemo unde exercitationem corrupti culpa quod dolores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit libero ipsam enim quia illum atque itaque id eum ex voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsam qui accusamus sit autem distinctio architecto quisquam labore explicabo ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet quisquam aperiam quo eius. Dolor corporis recusandae tempore animi, impedit saepe, dolorum adipisci exercitationem eligendi provident ab! Adipisci libero consequatur enim, maiores, provident aut voluptatum labore illo ullam, asperiores eveniet!
            </p>
        </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
        <img src={pic1} alt="" className="" />
        </div>
    </section>
  )
}

export default Section