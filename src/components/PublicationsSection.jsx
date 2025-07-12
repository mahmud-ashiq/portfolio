import { BookOpen, Users, Calendar } from "lucide-react";

export const PublicationsSection = () => {
  return (
    <section
      id="publications"
      className="py-12 md:py-24 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl w-full">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Research <span className="text-primary">Publications</span>
          </h2>
        </div>

        <div className="w-full">
          <div className="border border-gray-200 rounded-lg p-4 md:p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 w-full">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
              </div>
              {/* paper */}
              <div className="flex-1 min-w-0 text-left">
                <h4 className="font-semibold text-base md:text-lg mb-2 leading-tight ">
                  VMUNet-RVM: Vision Mamba UNet with Residual Vision Mamba Layer
                  for Medical Image Segmentation
                </h4>

                <p className="text-primary font-semibold text-sm md:text-base mb-3">
                  <a
                    href="https://vciba.springeropen.com/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visual Computing for Industry, Biomedicine, and Art
                  </a>
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    Under Review: Jul 2025
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    First Author
                  </span>
                </div>

                <ul className="text-gray-600 leading-relaxed text-sm md:text-base space-y-1 md:space-y-2 text-justify">
                  <li>
                    • Reduced parameters from 30M to 16M using RVM layer and
                    compressed VSS blocks for improved efficiency
                  </li>
                  <li>
                    • Achieved high accuracy across diverse medical and
                    non-medical segmentation datasets
                  </li>
                  <li>
                    • Modeled long-range dependencies with linear complexity via
                    the Residual Vision Mamba layer
                  </li>
                </ul>
              </div>

              {/* paper */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
