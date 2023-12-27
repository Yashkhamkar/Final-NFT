import React, { useContext, useState } from "react";
import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";
import axios from "axios";

const Create = () => {
  const { uploadToIPFS, createNft } = useContext(NFTMarketplaceContext);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const sendFileToIPFS = async (e) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `ecebb565b4d430f16442`,
            pinata_secret_api_key: `a351d50755063fa8b47d941936474298841a652caa5b038b1bd2fba06c4c0705`,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        console.log(ImgHash);
        alert("File Uploaded Successfully");
        //Take a look at your Pinata Pinned section, you will see a new file added to you list.
      } catch (error) {
        console.log("Error sending File to IPFS: ");
        console.log(process.env.PINATA_API_KEY);
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h2>Create NFT</h2>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*, audio/*, video/*"
      />
      <button onClick={sendFileToIPFS}>Upload and Create NFT</button>
    </div>
  );
};

export default Create;
