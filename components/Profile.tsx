import React from "react";
import Image from "next/image";

const Profile: React.FC = () => (
    <div className="group flex items-center">
        <div className="h-12 w-12 relative mr-3">
            <Image className="rounded-full"
                src="https://media-exp1.licdn.com/dms/image/C5603AQHyj86PDimi5g/profile-displayphoto-shrink_400_400/0/1650486193642?e=1658966400&v=beta&t=38Uu9edWTKgMhZ3lC8732ydBKzSIIO7FVx2FElOcyHI"
                alt="Photo de Profil" layout="fill" objectFit="cover"/>
        </div>
        <div className="ltr:ml-3">
            <p className="text-sm font-medium text-slate-300">Eloi Peloux</p>
            <p className="text-sm font-medium text-green-500">Développeur Fullstack Junior</p>
        </div>
    </div>
)

export default Profile