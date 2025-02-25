import React from 'react'
import Button from '../components/button'
const About = () => {
    return (
    <>
        
        <div className="min-h-screen bg-cover bg-center text-white">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Main Container */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="h-screen flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-5xl font-extrabold mb-4">🐾 Simplifying Pet Travel, One Paw at a Time!</h1>
                <p className="text-lg max-w-2xl">
                    PawPassport helps pet owners store vet records, check travel guidelines, and manage pet documents with ease.
                </p>
                 <Button/>
                </section>

                {/* Features Section */}
                <section className="py-16 px-6 bg-gray-900">
                <h2 className="text-3xl font-bold text-center mb-10">🚀 Features</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-800 p-6 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">📜 Digital Pet Passport</h3>
                    <p>Securely store your pet’s travel documents and records.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">🌍 Travel Guidelines</h3>
                    <p>Get country-specific pet travel regulations instantly.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">💉 Vet Records & Reminders</h3>
                    <p>Track vaccinations, medications, and checkups.</p>
                    </div>
                </div>
                </section>

                {/* How It Works */}
                <section className="py-16 px-6 text-center">
                <h2 className="text-3xl font-bold mb-10 text-black">🔍 How It Works</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black">1️⃣ Sign Up</h3>
                    <p>Create your account in just a few clicks.</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black">2️⃣ Add Pet Details</h3>
                    <p>Store your pet’s records and essential travel info.</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-black">3️⃣ Access Travel Info</h3>
                    <p>Get travel rules and vet records anytime, anywhere.</p>
                    </div>
                </div>
                </section>

                {/* Testimonials
                <section className="py-16 px-6 bg-gray-900 text-center">
                <h2 className="text-3xl font-bold mb-10">⭐ What Pet Owners Say</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-6 rounded-lg">
                    <p>“PawPassport made my international trip with my dog stress-free! Highly recommended.”</p>
                    <span className="font-bold">- Sarah & Max 🐕</span>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                    <p>“Keeping vet records organized has never been this easy. A must-have for pet owners!”</p>
                    <span className="font-bold">- Jake & Bella 🐾</span>
                    </div>
                </div>
                </section> */}

                {/* Footer */}
                <footer className="bg-gray-800 py-6 text-center">
                <p className="mb-2">📧 Contact us: support@pawpassport.com</p>
                <p>🐾 Follow us on social media: <a href="#" className="text-pink-500">Instagram</a> | <a href="#" className="text-pink-500">Twitter</a></p>
                <p className="mt-4">© 2025 PawPassport. All Rights Reserved.</p>
                </footer>
            </div>
            </div>



        </>
);
    
}

export default About;