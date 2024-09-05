import React from "react";

const BackgroundSection = ({ backgroundImage, title, breadcrumb }) => {
  
    
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="assets/Rectangle 1.png"
          alt="background" 
          className="w-full h-full object-cover "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 bg-white/70 py-16">
        <div className="container mx-auto text-center">
          {/* Title and Breadcrumb */}
          <h1 className="text-4xl font-semibold">{title}</h1>
          <nav className="mt-2 text-gray-600">
            {breadcrumb.map((crumb, index) => (
              <span key={index}>
                {index > 0 && " > "}
                <span className={crumb.active ? "text-black" : ""}>
                  {crumb.label}
                </span>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
