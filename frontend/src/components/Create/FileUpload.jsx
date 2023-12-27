import React, { useState, useRef, useContext } from "react";
import "./create.css";
import axios from "axios";
import Swal from "sweetalert2";
import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";

const FileUpload = () => {
  const { uploadToIPFS, createNft } = useContext(NFTMarketplaceContext);

  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [file, Setfile] = useState(null);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    Setfile(selectedFile);
    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
    } else {
      setSelectedFileName("");
    }
  };

  const sendFileToIPFS = async (e) => {
    e.preventDefault();

    if (file && name && price) {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("file", file); // Use the stored file variable here

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `1f82349ea0bcdbd62e5e`,
            pinata_secret_api_key: `2f7f352a6e0d94ce7dfba395d888b95cf153ec0c45d952a5d41392075e641111`,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        createNft(name, description, ImgHash, price);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Error sending File to IPFS",
          icon: "error",
        });
        console.log("Error sending File to IPFS: ");
        console.log(error);
      } finally {
        setname("");
        setprice("");
        Setfile(null);
        setdescription("");
        setSelectedFileName("");
        setLoading(false);
      }
    } else {
      Swal.fire({
        title: "Invalid input",
        text: "Please fill all the fields",
        icon: "warning",
      });
    }
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setSelectedFileName("");
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="formbold-main-wrapper">
      {loading && (
        <div className="terminal-loader">
          <div className="terminal-header">
            <div className="terminal-title">Status</div>
            <div className="terminal-controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
          </div>
          <div className="texti">Creating...</div>
        </div>
      )}
      {!loading && (
        <div className="formbold-form-wrapper">
          <form onSubmit={sendFileToIPFS}>
            <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label">
                NFT Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name of nft"
                className="formbold-form-input"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label">
                NFT Description
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Add description of nft"
                className="formbold-form-input"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="price" className="formbold-form-label">
                NFT Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Enter price of nft"
                className="formbold-form-input"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </div>

            <div className="mb-6 pt-4">
              <label className="formbold-form-label formbold-form-label-2">
                Upload File
              </label>

              <div
                className="formbold-mb-5 formbold-file-input"
                style={{ cursor: "pointer" }}
              >
                <input
                  type="file"
                  name="file"
                  id="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept="image/*, audio/*, video/*"
                  onChange={handleFileChange}
                />
                <label htmlFor="file" onClick={handleBrowseClick}>
                  <div>
                    <span className="formbold-drop-file">
                      {selectedFileName || "Drop files here"}
                    </span>
                    <span className="formbold-or"> Or </span>
                    <span
                      className="formbold-browse"
                      style={{ cursor: "pointer" }}
                    >
                      Browse{" "}
                    </span>
                  </div>
                </label>
              </div>

              {selectedFileName?.length > 0 && (
                <div className="formbold-file-list formbold-mb-5">
                  <div className="formbold-file-item">
                    <span
                      className="formbold-file-name"
                      style={{ color: "black" }}
                    >
                      {" "}
                      {selectedFileName}{" "}
                    </span>
                    <button onClick={handleRemoveImage}>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        cursor="pointer"
                        color="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
            <img src={file} alt="" />
            <button className="formbold-btn w-full" onClick={sendFileToIPFS}>
              Create Nft
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
