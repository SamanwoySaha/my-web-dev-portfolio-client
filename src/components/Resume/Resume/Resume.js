import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { Document, Page } from 'react-pdf';
import ResumePdf from '../../../pdf/Resume.pdf';
import { Container } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <div>
            <Header></Header>
            <Container className="mx-auto mb-5 d-flex flex-column align-items-center topSpacing">
                <Document
                    file={ResumePdf}
                    options={{ workerSrc: "/pdf.worker.js" }}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="resume"
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p>
                        Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                    </p>
                    <div>
                        <button className="main-btn" type="button" disabled={pageNumber <= 1} onClick={previousPage}>Previous</button>
                        <button
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}
                            className="main-btn"
                        >
                            Next
                    </button>
                    </div>
                    <button className="main-btn mt-3">
                        <Link target="_blank" to={ResumePdf}>
                            <FaFilePdf className="icon mr-1" /> Download Resume
                        </Link>
                    </button>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Resume;