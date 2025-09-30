import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 text-center">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        I’d love to hear from you! Feel free to reach out anytime at:
                    </p>
                    <p className="text-xl font-semibold text-blue-600">
                        mfajarandikhaa@gmail.com
                    </p>
                </div>
            </RevealOnScroll>
        </section>
    );
};
