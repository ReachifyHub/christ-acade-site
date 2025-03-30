
interface PageHeaderProps {
  title: string;
  breadcrumbs?: { label: string; link?: string }[];
}

const PageHeader = ({ title, breadcrumbs }: PageHeaderProps) => {
  return (
    <div className="bg-school-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-4">
          {title}
        </h1>
        
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex justify-center">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2">
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="inline-flex items-center">
                    {index > 0 && (
                      <span className="mx-2 text-gray-300">/</span>
                    )}
                    
                    {crumb.link ? (
                      <a
                        href={crumb.link}
                        className={`text-sm ${
                          index === breadcrumbs.length - 1
                            ? "text-school-secondary font-medium"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {crumb.label}
                      </a>
                    ) : (
                      <span className="text-sm text-school-secondary font-medium">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
