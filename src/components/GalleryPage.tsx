import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryPageProps {
  onNavigate: (page: any) => void;
}

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1593720083103-e7118f71cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZWhpY2xlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY4MTg4ODI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Exterior Detail',
      category: 'Premium Detailing',
    },
    {
      url: 'https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgxNTA4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Interior Detail',
      category: 'Premium Detailing',
    },
    {
      url: 'https://images.unsplash.com/photo-1605437241278-c1806d14a4d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4MDc1NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Professional Care',
      category: 'Process',
    },
    {
      url: 'https://images.unsplash.com/photo-1648468092334-1efcf9620346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBiZWZvcmUlMjBhZnRlcnxlbnwxfHx8fDE3NjgxODg5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Transformation',
      category: 'Before & After',
    },
    {
      url: 'https://images.unsplash.com/photo-1690049585211-fe8f5178fd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBjbGVhbnxlbnwxfHx8fDE3NjgxODg5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Showroom Finish',
      category: 'Premium Detailing',
    },
    {
      url: 'https://images.unsplash.com/photo-1595879038763-969b6e17e093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoaW5nJTIwZGV0YWlsfGVufDF8fHx8MTc2ODE4ODkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Hand Wash Detail',
      category: 'Maintenance',
    },
  ];

  return (
    <div className="bg-background">
      {/* Page Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-sm text-muted-foreground tracking-wider uppercase">
            Our Work
          </p>
          <h1 className="text-4xl lg:text-5xl tracking-tight">
            Real Vehicles. Real Results.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every vehicle tells a story. See the transformation we bring to vehicles across Klang Valley.
          </p>
        </div>
      </Section>

      {/* Gallery Grid */}
      <Section background="subtle">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                  <p className="text-sm text-primary">{image.category}</p>
                  <p className="text-lg">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Before & After Section */}
      <Section>
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl mb-4">Before & After</h2>
            <p className="text-xl text-muted-foreground">
              Witness the transformation
            </p>
          </div>

          {/* Sample Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1648468092334-1efcf9620346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBiZWZvcmUlMjBhZnRlcnxlbnwxfHx8fDE3NjgxODg5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Before detailing"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute top-4 left-4 px-4 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm">
                  Before
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1690049585211-fe8f5178fd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBjbGVhbnxlbnwxfHx8fDE3NjgxODg5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="After detailing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-4 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-sm text-primary-foreground">
                  After
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-6xl w-full">
            <ImageWithFallback
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}