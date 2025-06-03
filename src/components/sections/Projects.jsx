import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project 1 */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-slate-800 text-xl font-bold mb-2"> Marapthon Season 2: Content Insights & Viewer Trends</h3>
                            <p className="text-slate-600 mb-4">
                                This project analyzes viewer engagement and content performance during Marapthon Season 2 on YouTube, focusing on identifying trends over time and content strategies that drive higher views.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "GCP", "Airflow", "Terraform", "DBT", "Looker Studio", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/mfajarandikha/youtube-data-analysis" target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-slate-800 text-xl font-bold mb-2"> ETL with Airflow</h3>
                            <p className="text-slate-600 mb-4">
                                This project demonstrates an end-to-end ELT pipeline that extracts data from a source PostgreSQL database, loads it into a destination PostgreSQL database, and performs data transformations using dbt (Data Build Tool).
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "PostgreSQL", "Airflow", "DBT", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/mfajarandikha/DataEngineering_ELT_Airflow" target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-slate-800 text-xl font-bold mb-2"> ETL with MageAI</h3>
                            <p className="text-slate-600 mb-4">
                                This project demonstrates an ETL pipeline for processing and analyzing taxi trip data, orchestrated using Mage AI.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Pandas", "MageAI", "Virtual Machine", "Big Query", "Looker Studio"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/mfajarandikha/DataEngineering_ETL_MageAI" target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        {/* Project 4 */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-slate-800 text-xl font-bold mb-2"> Hand Sign Recognition</h3>
                            <p className="text-slate-600 mb-4">
                                A Python-based application that uses MediaPipe and a Multi-Layer Perceptron (MLP) model to recognize American Sign Language (ASL) gestures.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "TensorFlow", "MediaPipe", "Numpy", "OpenCV"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/mfajarandikha/HandsSignASLRecognition-ToSpeech" target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        {/* Project 5 */}
                        <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-slate-800 text-xl font-bold mb-2">Ngojek Mobile App</h3>
                            <p className="text-slate-600 mb-4">
                                A simplified ride-hailing mobile app built that replicates Gojek. The app allows users to calculate ride fare estimates based on distance and includes a basic payment simulation system.                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Flutter", "Dart", "Google Maps API"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/mfajarandikha/MobileApp_Ngojek" target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};