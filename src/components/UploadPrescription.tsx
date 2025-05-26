
import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Upload, X, Camera, FileText, CheckCircle } from 'lucide-react';

const UploadPrescription = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [detectedMedicines, setDetectedMedicines] = useState([]);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (files) => {
    const newFiles = Array.from(files).map((file, index) => ({
      id: Date.now() + index,
      file,
      name: file.name,
      size: file.size,
      preview: URL.createObjectURL(file)
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
    
    // Simulate OCR processing
    setIsProcessing(true);
    setTimeout(() => {
      const mockDetected = [
        { id: 1, name: 'Metformin 500mg', quantity: '30 tablets', editable: true },
        { id: 2, name: 'Lisinopril 10mg', quantity: '30 tablets', editable: true },
        { id: 3, name: 'Vitamin D3 2000 IU', quantity: '60 capsules', editable: true }
      ];
      setDetectedMedicines(mockDetected);
      setIsProcessing(false);
    }, 2000);
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const updateMedicine = (id, field, value) => {
    setDetectedMedicines(prev =>
      prev.map(med => med.id === id ? { ...med, [field]: value } : med)
    );
  };

  const removeMedicine = (id) => {
    setDetectedMedicines(prev => prev.filter(med => med.id !== id));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Upload Your Prescription
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            We take your safety seriously. Only valid prescriptions are accepted.
          </p>
          <p className="text-sm text-gray-500">
            Upload JPG, PNG, or PDF. Max size: 5MB per file.
          </p>
        </div>

        <div className="space-y-8">
          {/* Upload Area */}
          <Card className="p-8 rounded-2xl">
            <div 
              className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
              onDrop={(e) => {
                e.preventDefault();
                handleFileUpload(e.dataTransfer.files);
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Upload className="h-16 w-16 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Drag & drop your prescription here
                  </h3>
                  <p className="text-gray-600 mb-4">or click to browse files</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" className="rounded-xl">
                      <FileText className="h-4 w-4 mr-2" />
                      Browse Files
                    </Button>
                    <Button variant="outline" className="rounded-xl">
                      <Camera className="h-4 w-4 mr-2" />
                      Take Photo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,.pdf"
              onChange={(e) => handleFileUpload(e.target.files)}
              className="hidden"
            />
          </Card>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <Card className="p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-4">Uploaded Files</h3>
              <div className="space-y-3">
                {uploadedFiles.map((file) => (
                  <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={file.preview} 
                        alt="Preview" 
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-gray-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFile(file.id)}
                      className="rounded-full p-2"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* OCR Processing */}
          {isProcessing && (
            <Card className="p-8 rounded-2xl">
              <div className="text-center space-y-4">
                <div className="animate-pulse">
                  <div className="h-4 bg-blue-200 rounded-full"></div>
                </div>
                <p className="text-lg font-medium">Processing your prescription...</p>
                <p className="text-gray-600">Our AI is detecting medicines from your uploaded image</p>
              </div>
            </Card>
          )}

          {/* Detected Medicines */}
          {detectedMedicines.length > 0 && (
            <Card className="p-6 rounded-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <h3 className="text-lg font-semibold">Detected Medicines (Review & Edit)</h3>
              </div>
              <div className="space-y-4">
                {detectedMedicines.map((medicine) => (
                  <div key={medicine.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
                    <Input
                      value={medicine.name}
                      onChange={(e) => updateMedicine(medicine.id, 'name', e.target.value)}
                      placeholder="Medicine name"
                      className="rounded-lg"
                    />
                    <Input
                      value={medicine.quantity}
                      onChange={(e) => updateMedicine(medicine.id, 'quantity', e.target.value)}
                      placeholder="Quantity/Dosage"
                      className="rounded-lg"
                    />
                    <Button
                      variant="outline"
                      onClick={() => removeMedicine(medicine.id)}
                      className="rounded-lg"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full rounded-xl">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Medicine Manually
                </Button>
              </div>
            </Card>
          )}

          {/* Terms and Submit */}
          {detectedMedicines.length > 0 && (
            <Card className="p-6 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="terms" 
                    checked={termsAccepted}
                    onCheckedChange={setTermsAccepted}
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                    I confirm this is a valid doctor's prescription and I accept the{' '}
                    <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>{' '}
                    for prescription processing.
                  </label>
                </div>
                
                <Button 
                  disabled={!termsAccepted}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-medium"
                >
                  Submit Prescription
                </Button>
                
                <p className="text-center text-sm text-gray-500">
                  Your prescription will be reviewed by our licensed pharmacists within 2 hours.
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadPrescription;
