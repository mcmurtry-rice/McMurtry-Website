import React, { useState, useEffect } from 'react';
import './PDFViewer.css';

const PDFViewer = ({ src }) => {
    const [pdfZoom, setPdfZoom] = useState(95);

    useEffect(() => {
        const updateZoom = () => {
            if (window.innerWidth <= 480) {
                setPdfZoom(40);
            } else if (window.innerWidth <= 768) {
                setPdfZoom(65);
            } else {
                setPdfZoom(85);
            }
        };
        updateZoom();
        window.addEventListener('resize', updateZoom);
        return () => window.removeEventListener('resize', updateZoom);
    }, []);

    return (
        <div className="pdf-viewer-container">
            <embed
                src={`${src}#zoom=${pdfZoom}&toolbar=0&navpanes=0&scrollbar=1`}
                type="application/pdf"
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default PDFViewer;
