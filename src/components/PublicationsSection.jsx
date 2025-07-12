import { BookOpen,
  Users,
  Calendar,
} from "lucide-react";

  export const PublicationsSection = () => {
  return (
      <section id="publications" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Research <span className="text-primary"> Publications</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
            
            <div className="grid grid-cols-1 gap-6">
              
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg mb-2">VMUNet-RVM: Vision Mamba UNet with Residual Vision Mamba Layer for Medical Image Segmentation</h4>
                    <p className="text-primary font-semibold">
                      <a href="https://vciba.springeropen.com/">Visual Computing for Industry, Biomedicine, and Art</a>
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-8 w-4" />
                          Under Review: Jul 2025
                    </span>
                    <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          First Author
                        </span>
                        </div>
                    <p className="text-muted-foreground leading-relaxed text-justify ">
                            <li>Reduced parameters from 30M to 16M using RVM layer and compressed VSS blocks for improved efficiency</li>
                            <li>Achieved high accuracy across diverse medical and non-medical segmentation datasets</li>
                            <li>Modeled long-range dependencies with linear complexity via the Residual Vision Mamba layer.</li>
                          </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
  );
};