import { BookOpen, Users, Calendar } from "lucide-react";

export const PublicationsSection = () => {
  return (
    <section id="publications" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Research <span className="text-primary">Publications</span>
        </h2>

        <div className="space-y-6 sm:space-y-8 text-left">
          
          <div className="gradient-border p-4 sm:p-6 card-hover">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-full bg-primary/10">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0 ">
                <h4 className="font-semibold text-lg sm:text-xl mb-1">
                  VMUNet-RVM: Vision Mamba UNet with Residual Vision Mamba Layer
                  for Medical Image Segmentation
                </h4>
                <p className="text-primary font-semibold mb-2">
                  Visual Computing for Industry, Biomedicine, and Art
                </p>
               <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    Under Review: Jul 2025
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    First Author
                  </span>
                </div>

                <ul className="text-muted-foreground leading-relaxed space-y-1 text-sm sm:text-base test-justify">
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
            </div>
          </div>


        </div>
      </div>
    </section>

  );
};
