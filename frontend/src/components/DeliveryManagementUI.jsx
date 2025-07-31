import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Truck, Package, ShoppingCart } from 'lucide-react';

const DeliveryManagementUI = () => {
  const [selectedTrucks, setSelectedTrucks] = useState([]);
  const [numberOfTrucks, setNumberOfTrucks] = useState('10');
  const [allocatedCapacity, setAllocatedCapacity] = useState('2');
  const [selectedSoftware, setSelectedSoftware] = useState('');
  const [selectedEnergy, setSelectedEnergy] = useState('électricité');
  const [targetZone, setTargetZone] = useState('Zone');

  const trucks = [
    { id: 1, name: 'Camion 1', transporter: 'Ahmed Touballi', energy: 'électricité', maintenance: 10 },
    { id: 2, name: 'Camion 1', transporter: 'Ahmed Touballi', energy: 'électricité', maintenance: 10 },
    { id: 3, name: 'Camion 1', transporter: 'Ahmed Touballi', energy: 'électricité', maintenance: 10 },
    { id: 4, name: 'Camion 1', transporter: 'Ahmed Touballi', energy: 'électricité', maintenance: 10 }
  ];

  const deliveryZones = [
    { zone: 'Nord', quantity: 225 },
    { zone: 'Sud', quantity: 225 },
    { zone: 'Centre', quantity: 225 }
  ];

  const handleTruckSelect = (truckId) => {
    setSelectedTrucks(prev => 
      prev.includes(truckId) 
        ? prev.filter(id => id !== truckId)
        : [...prev, truckId]
    );
  };

  const TruckCard = ({ truck, isSelected, onSelect }) => (
    <div className={`relative bg-white rounded-lg border-2 ${isSelected ? 'border-blue-500' : 'border-gray-200'} p-4 mb-4`}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onSelect(truck.id)}
        className="absolute top-3 right-3 w-4 h-4"
      />
      <div className="flex items-center gap-3 mb-3">
        <div className="w-20 h-16 bg-blue-500 rounded flex items-center justify-center">
          <Truck className="text-white w-8 h-8" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{truck.name}</h3>
          <p className="text-sm text-gray-600">Transporteur : {truck.transporter}</p>
          <p className="text-sm text-gray-600">Énergie : {truck.energy}</p>
          <p className="text-sm text-gray-600">Frais de maintenance : {truck.maintenance}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">Capacité</span>
        <div className="flex items-center gap-1">
          <div className="w-16 h-2 bg-gray-200 rounded">
            <div className="w-3/4 h-full bg-yellow-600 rounded"></div>
          </div>
          <span className="text-xs text-gray-500">80%</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Navigation */}
        <div className="flex gap-8 mb-8">
          <div className="flex items-center gap-2 text-gray-600">
            <Truck className="w-5 h-5" />
            <span>Camions à disposition</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <ShoppingCart className="w-5 h-5" />
            <span>Achat des camions</span>
          </div>
          <div className="flex items-center gap-2 text-yellow-700 font-semibold">
            <Package className="w-5 h-5" />
            <span>Livraison des produits</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Delivery Modes */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Modes de livraisons</h2>
              
              {/* Mode Selection */}
              <div className="flex gap-4 mb-6">
                <button className="bg-yellow-600 text-white px-4 py-2 rounded text-sm font-medium">
                  Camions propres à l'entreprise
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm">
                  Contrat avec les transporteurs
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm">
                  Partenariat avec un concurrent
                </button>
              </div>

              {/* Target Zone */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zone ciblée <span className="text-blue-500">ⓘ</span>
                </label>
                <select 
                  value={targetZone}
                  onChange={(e) => setTargetZone(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Zone</option>
                  <option>Nord</option>
                  <option>Sud</option>
                  <option>Centre</option>
                </select>
              </div>

              {/* Available Trucks */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">
                  Liste des camions disponibles <span className="text-blue-500">ⓘ</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {trucks.map(truck => (
                    <TruckCard
                      key={truck.id}
                      truck={truck}
                      isSelected={selectedTrucks.includes(truck.id)}
                      onSelect={handleTruckSelect}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2">
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Configuration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de camion
                  </label>
                  <input
                    type="text"
                    value={numberOfTrucks}
                    onChange={(e) => setNumberOfTrucks(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Capacité allouées <span className="text-blue-500">ⓘ</span>
                  </label>
                  <input
                    type="text"
                    value={allocatedCapacity}
                    onChange={(e) => setAllocatedCapacity(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Software */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Les logiciels utilisés <span className="text-blue-500">ⓘ</span>
                </label>
                <select 
                  value={selectedSoftware}
                  onChange={(e) => setSelectedSoftware(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-400"
                >
                  <option value="">Saisir ou sélectionner des éléments</option>
                </select>
              </div>

              {/* Energy Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Énergie <span className="text-blue-500">ⓘ</span>
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="energy"
                      value="électricité"
                      checked={selectedEnergy === 'électricité'}
                      onChange={(e) => setSelectedEnergy(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm">électricité</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="energy"
                      value="Hybride"
                      checked={selectedEnergy === 'Hybride'}
                      onChange={(e) => setSelectedEnergy(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm">Hybride</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="energy"
                      value="Carburant"
                      checked={selectedEnergy === 'Carburant'}
                      onChange={(e) => setSelectedEnergy(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm">Carburant</span>
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Annuler
                </button>
                <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                  Confirmer
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Product Delivery */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                La quantité des produits disponibles pour la livraison
              </h3>
              
              {/* Delivery Zones Table */}
              <div className="bg-yellow-600 text-white rounded-t-lg">
                <div className="grid grid-cols-2 p-3 font-medium">
                  <div>Zone</div>
                  <div className="text-right">Quantité à livrer</div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-b-lg">
                {deliveryZones.map((zone, index) => (
                  <div key={index} className="grid grid-cols-2 p-3 border-b border-gray-200 last:border-b-0">
                    <div className="text-gray-700">{zone.zone}</div>
                    <div className="text-right text-gray-700">{zone.quantity}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Illustration */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8 h-64">
                {/* Stylized map with truck */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-yellow-600 rounded-lg p-3 shadow-lg">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Map pins */}
                <div className="absolute top-6 left-8">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute top-12 right-12">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                
                {/* Stylized road */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-1 bg-white rounded transform rotate-45"></div>
                </div>
                
                {/* Trees illustration */}
                <div className="absolute bottom-8 left-6">
                  <div className="w-4 h-6 bg-green-600 rounded-t-full"></div>
                </div>
                <div className="absolute bottom-6 left-12">
                  <div className="w-3 h-5 bg-green-500 rounded-t-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryManagementUI;