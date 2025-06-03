import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const dataengineerSkills = [
        "Python",
        "Airflow",
        "DBT",
        "GCP",
        "Terraform",
        "Docker"
    ];

    const datascientistSkills = [
        "Python",
        "TensorFlow",
        "Pandas",
        "Numpy",
        "OpenCV",
        "MediaPipe"
    ];

    const frontendSkills = [
        "Outsystems",
        "Tailwind CSS",
        "JavaScript",
    ];

    const backendSkills = ["Python", "Flask", "Node.js", "GCP", "PostgreSQL", "Outsystems"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-slate-600 mb-6 text-center">
                            Highly motivated Data Engineering enthusiast skilled in SQL, Python, ETL pipelines, and big data technologies (including Google Cloud Platform). Proven ability in data processing, modeling, PostgreSQL management, and workflow orchestration with Apache Airflow and Docker, gained through hands-on projects and an Informatics degree. Passionate about optimizing data pipelines and empowering data-driven decisions. Seeking opportunities to contribute to impactful data solutions and grow in Data Engineering and Analytics.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-slate-800 text-xl font-bold mb-4">Data Engineer</h3>
                                <div className="flex flex-wrap gap-2">
                                    {dataengineerSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>


                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-slate-800 text-xl font-bold mb-4">Data Scientist</h3>
                                <div className="flex flex-wrap gap-2">
                                    {datascientistSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-slate-800 text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-slate-800 text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all space-y-4">
                            {/* --- Education Section --- */}
                            <h3 className="text-slate-800 text-xl font-bold mb-4">🏫 Education</h3>
                            <ul className="list-inside text-slate-600 space-y-2">
                                <li>
                                    <strong>Bachelor’s Degree in Informatics</strong> - Universitas Pembangunan
                                    Nasional “Veteran” Yogyakarta (2020-2024)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, Web Development, Cloud Computing...
                                </li>
                            </ul>

                            {/* --- Course Section (with added top margin) --- */}
                            <h3 className="mg text-slate-800 text-xl font-bold mb-4 **mt-8**">
                                📚 Course
                            </h3>
                            <ul className="list-inside text-slate-600 space-y-2">
                                <li>
                                    {/* It seems like you have duplicate content here, you might want to update this */}
                                    <strong>Artificial Intelligence Mastery Program</strong> - Orbit Future Academy (2022)
                                </li>
                                <li>
                                    Relevant Coursework: Machine Learning, Computer Vision, Neural Language Processing (NLP)...
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-slate-800 text-xl font-bold mb-4"> 💼 Internship Experience </h3>
                            <div className="space-y-4 text-slate-600">
                                <div>
                                    <h4 className="font-semibold">
                                        {" "}
                                        Fullstack Developer at PT. Bank Central Asia Tbk. (2023){" "}
                                    </h4>
                                    <p>
                                        1. Engineered and deployed a web application for Marketable Securities, reducing workflow redundancy by 60% through process digitization and automation. <br />
                                        2. Eliminating manual steps and providing real-time tracking for staff and supervisors.<br />
                                        3. Implemented robust Role-Based Access Control to monitor user actions, ensuring full transparency, accountability, and regulatory compliance. <br />
                                    </p>
                                </div>

                                {/* <div> */}
                                {/* <h4 className="font-semibold"> */}
                                {/* {" "} */}
                                {/* Intern at DEF Startups (2019){" "} */}
                                {/* </h4> */}
                                {/* <p> */}
                                {/* Assisted in building front-end components and integration */}
                                {/* REST APIs */}
                                {/* </p> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};