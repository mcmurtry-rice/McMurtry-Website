import React, { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './PDFViewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ src, title, height = 800 }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [zoom, setZoom] = useState(1.0);
    const ZOOM_STEP = 0.25;
    const ZOOM_MIN = 0.5;
    const ZOOM_MAX = 2.0;

    const zoomIn  = useCallback(() => setZoom(z => Math.min(+(z + ZOOM_STEP).toFixed(2), ZOOM_MAX)), []);
    const zoomOut = useCallback(() => setZoom(z => Math.max(+(z - ZOOM_STEP).toFixed(2), ZOOM_MIN)), []);
    const reset   = useCallback(() => setZoom(1.0), []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const filename = title || src.split('/').pop().replace(/_/g, ' ').replace(/\.pdf$/i, '');

    return (
        <div className='pv-wrap'>
            <div className='pv-toolbar'>
                <div className='pv-toolbar-left'>
                    <img src='/static/icons/file.svg' alt='' className='pv-file-icon' aria-hidden='true' />
                    <span className='pv-filename'>{filename}</span>
                </div>
                <div className='pv-toolbar-right'>
                    <div className='pv-zoom-controls'>
                        <button className='pv-btn' onClick={zoomOut} disabled={zoom <= ZOOM_MIN} aria-label='Zoom out'>
                            <svg width='14' height='14' viewBox='0 0 14 14' fill='none' aria-hidden='true'>
                                <rect x='2' y='6.5' width='10' height='1.5' rx='0.75' fill='currentColor' />
                            </svg>
                        </button>
                        <button className='pv-zoom-label' onClick={reset} title='Reset zoom'>{Math.round(zoom * 100)}%</button>
                        <button className='pv-btn' onClick={zoomIn} disabled={zoom >= ZOOM_MAX} aria-label='Zoom in'>
                            <svg width='14' height='14' viewBox='0 0 14 14' fill='none' aria-hidden='true'>
                                <rect x='6.25' y='2' width='1.5' height='10' rx='0.75' fill='currentColor' />
                                <rect x='2' y='6.25' width='10' height='1.5' rx='0.75' fill='currentColor' />
                            </svg>
                        </button>
                    </div>
                    <div className='pv-toolbar-divider' aria-hidden='true' />
                    <a className='pv-btn pv-download' href={src} download target='_blank' rel='noopener noreferrer' aria-label='Download PDF'>
                        <svg width='14' height='14' viewBox='0 0 14 14' fill='none' aria-hidden='true'>
                            <path d='M7 1v7.5M7 8.5l-2.5-2.5M7 8.5l2.5-2.5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M2 11h10' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
                        </svg>
                        <span>Download</span>
                    </a>
                </div>
            </div>

            <div className='pv-body' style={{ height }}>
                <div className='pv-scroll'>
                    <Document
                        file={src}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={<div className='pv-loading'>Loading PDF…</div>}
                        error={
                            <div className='pv-fallback'>
                                <p>Could not load PDF inline.</p>
                                <a href={src} target='_blank' rel='noopener noreferrer' className='pv-fallback-link'>
                                    Open PDF <span aria-hidden='true'>&rarr;</span>
                                </a>
                            </div>
                        }
                    >
                        {Array.from({ length: numPages || 0 }, (_, i) => (
                            <Page
                                key={i + 1}
                                pageNumber={i + 1}
                                scale={zoom}
                                className='pv-page'
                                renderTextLayer={false}
                            />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
};

export default PDFViewer;
