import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'
import { Building, ChevronLeft, ChevronRight } from 'lucide-react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  direction = "up" 
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.disconnect()
    }
  }, [delay])

  const transforms = {
    up: `translateY(${isVisible ? 0 : 40}px)`,
    down: `translateY(${isVisible ? 0 : -40}px)`,
    left: `translateX(${isVisible ? 0 : 40}px)`,
    right: `translateX(${isVisible ? 0 : -40}px)`
  }
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: transforms[direction]
      }}
    >
      {children}
    </div>
  )
}

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  const workImages = [
    "/images/working/1.jpg",
    "/images/working/2.jpeg",
    "/images/working/3.jpg",
    "/images/working/4.jpg",
    "/images/working/5.jpg"
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % workImages.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [workImages.length])

  const navigateToPrevious = () => 
    setCurrentImage((prev) => (prev - 1 + workImages.length) % workImages.length)
  
  const navigateToNext = () => 
    setCurrentImage((prev) => (prev + 1) % workImages.length)
  
  const navigateToIndex = (index: number) => 
    setCurrentImage(index)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-4">Workplace Gallery</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            A glimpse into my daily work environment and activities
          </p>
        </FadeIn>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-xl border-2 border-border shadow-xl">
            <div 
              className="relative h-[500px] md:h-[600px] w-full bg-card flex items-center justify-center transition-all duration-500"
              style={{
                backgroundImage: `url(${workImages[currentImage]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <Building className="absolute h-32 w-32 text-white/10" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white z-10 bg-black/40 backdrop-blur-sm p-4 rounded-lg">
                <h4 className="text-xl font-bold">Intern Moment</h4>
                <p className="text-sm opacity-90">eBram International Online Arbitration Center</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-10">
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full shadow-xl border border-border h-12 w-12 hover:bg-primary hover:text-white transition-colors"
              onClick={navigateToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-10">
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full shadow-xl border border-border h-12 w-12 hover:bg-primary hover:text-white transition-colors"
              onClick={navigateToNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-8 gap-3">
            {workImages.map((_, i) => (
              <button
                key={i}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentImage === i 
                    ? 'bg-primary scale-110 shadow-md' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => navigateToIndex(i)}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
          
          <div className="mt-6 flex justify-center gap-2 overflow-x-auto px-4 py-2 max-w-3xl mx-auto">
            {workImages.map((img, i) => (
              <button
                key={i}
                className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden transition-all duration-300 ${
                  currentImage === i ? 'ring-2 ring-primary scale-105' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => navigateToIndex(i)}
                aria-label={`Select image ${i + 1}`}
              >
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection