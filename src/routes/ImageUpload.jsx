import React, { useState } from "react";
import "../styles/common.css";
import "../styles/imageupload.css";

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
            setProgress(0);
        }
    };

    const handleUpload = () => {
        if (!image) return alert("Please select an image first!");
        setIsUploading(true);
        setProgress(0);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsUploading(false);
                    return 100;
                }
                return prev + 10;
            });
        }, 300);
    };

    const handleReset = () => {
        setImage(null);
        setPreview(null);
        setProgress(0);
    };

    return (
        <div className="common-container">
            <div className="container">
                <header>
                    <h1>Image Upload</h1>
                </header>

                <div className="upload-box">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        id="file-input"
                        style={{ display: "none" }}
                    />

                    <label htmlFor="file-input" className="upload-label">
                        {image ? "Change Image" : "Choose Image"}
                    </label>

                    {preview && (
                        <div className="preview-container">
                            <img src={preview} alt="Preview" className="preview-image" />
                        </div>
                    )}

                    {progress > 0 && (
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    )}

                    <div className="button-group">
                        <button
                            className="button-style"
                            onClick={handleUpload}
                            disabled={!image || isUploading}
                        >
                            {isUploading ? "Uploading..." : "Start Upload"}
                        </button>

                        {image && (
                            <button
                                className="button-style danger"
                                onClick={handleReset}
                                disabled={isUploading}
                            >
                                Reset
                            </button>
                        )}
                    </div>

                    {progress === 100 && (
                        <p className="success-text">✅ Upload Complete!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;
