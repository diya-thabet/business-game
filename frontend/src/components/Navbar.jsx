import React, { useState } from "react";
import { Home, User, LogOut, Menu, Search, Moon } from "lucide-react";
import StatsContainer from "./StatsContainer";
import DecisionsContainer from "./DecisionsContainer";

import {
  Grid3X3,
  Settings,
  BarChart3,
  Info,
  FileText,
  Users,
  ArrowLeft,
  Bell,
  Calendar,
  Plus,
  ChevronDown,
} from "lucide-react";

const LogisticsDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-sm text-gray-600">JEUX</span>
            </div>
            <div className="text-sm font-medium text-gray-900">
              Direction Logistique
            </div>
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <span>Classement: 3</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-blue-600">
              <div className="w-4 h-4 bg-blue-100 rounded"></div>
              <div>
                <div className="text-xs text-gray-500">
                  Passage du trimestre
                </div>
                <div className="font-medium">04:56:03</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <div>
                <div className="text-xs">Q1/3</div>
                <div className="text-xs">Trimestres</div>
              </div>
            </div>
            <button className="flex items-center space-x-1 px-3 py-1 border border-gray-300 rounded text-sm">
              <Calendar className="w-4 h-4" />
              <span>Events</span>
            </button>
            <button className="p-2 text-gray-400">
              <Bell className="w-4 h-4" />
            </button>
            <button className="p-2 bg-red-500 text-white rounded">
              <Plus className="w-4 h-4" />
            </button>
            <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-12 bg-white border-r border-gray-200 py-4">
          <div className="flex flex-col items-center space-y-6">
            <button className="p-2 text-blue-600 bg-blue-50 rounded-lg">
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg">
              <BarChart3 className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg">
              <Info className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg">
              <FileText className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg">
              <Users className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom expand button */}
          <div className="absolute bottom-4 left-2">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-gray-900 mb-2">
              Direction Logistique
            </h1>

            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {/* Taux de livraisons à temps */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-700">
                    Taux de livraisons à temps
                  </h3>
                  <button className="text-gray-400">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative w-24 h-24">
                    <svg
                      className="w-24 h-24 transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="75, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900">
                        75%
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      $2,420
                    </div>
                    <div className="text-sm text-green-600">-3.3%</div>
                    <div className="space-y-1 mt-3">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-600">Atelier 1</span>
                        </div>
                        <span className="font-medium">$7,660</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-600">Atelier 2</span>
                        </div>
                        <span className="font-medium">$2,820</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                          <span className="text-gray-600">Atelier 3</span>
                        </div>
                        <span className="font-medium">$5,120</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coût logistique par unité */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-700">
                    Coût logistique par unité
                  </h3>
                  <button className="text-gray-400">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative w-24 h-24">
                    <svg
                      className="w-24 h-24 transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#eab308"
                        strokeWidth="2"
                        strokeDasharray="60, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900">
                        60%
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      $6,420
                    </div>
                    <div className="text-sm text-green-600">-3.3%</div>
                    <div className="space-y-1 mt-3">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-gray-600">Atelier 1</span>
                        </div>
                        <span className="font-medium">$7,660</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-600">Atelier 2</span>
                        </div>
                        <span className="font-medium">$2,820</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                          <span className="text-gray-600">Atelier 3</span>
                        </div>
                        <span className="font-medium">$5,120</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Taux de remplissage des camions */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-700">
                    Taux de remplissage des camions
                  </h3>
                  <button className="text-gray-400">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative w-24 h-24">
                    <svg
                      className="w-24 h-24 transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="2"
                        strokeDasharray="85, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900">
                        85%
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      $8,220
                    </div>
                    <div className="text-sm text-green-600">3.3%</div>
                    <div className="space-y-1 mt-3">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                          <span className="text-gray-600">Atelier 1</span>
                        </div>
                        <span className="font-medium">$7,660</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-gray-600">Atelier 2</span>
                        </div>
                        <span className="font-medium">$2,820</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                          <span className="text-gray-600">Atelier 3</span>
                        </div>
                        <span className="font-medium">$5,120</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Effectif
                </h3>
                <button className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded text-sm">
                  <span>Filter</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="h-64 flex items-end space-x-1">
                {/* Simulated chart bars */}
                <div className="w-full h-full bg-gradient-to-r from-blue-50 to-blue-100 rounded flex items-end justify-center">
                  <svg className="w-full h-48" viewBox="0 0 400 200">
                    <polyline
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      points="0,180 40,160 80,170 120,140 160,120 200,130 240,110 280,140 320,160 360,180 400,170"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-4">
                <span>11/11</span>
                <span>18/11</span>
                <span>25/11</span>
                <span>11/12</span>
                <span>2/01</span>
                <span>18/01</span>
                <span>25/01</span>
              </div>
            </div>
          </div>

          <DecisionsContainer></DecisionsContainer>
          <StatsContainer></StatsContainer>
        </main>

        {/* Right Sidebar - Conseils de l'expert */}
        <aside className="w-80 bg-white border-l border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Conseils de l'expert
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700">
                  Félicitations ! Vous engrangez et créez pour le leadership
                  véritable votre équipe au Maternel et d'obtention des
                  résultats Continuer sur cette lancée !
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700">
                  Félicitations ! Vous engrangez et créez pour le leadership
                  véritable votre équipe au Maternel et d'obtention des
                  résultats Continuer sur cette lancée !
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700">
                  Félicitations ! Vous engrangez et créez pour le leadership
                  véritable votre équipe au Maternel et d'obtention des
                  résultats Continuer sur cette lancée !
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700">
                  Attention ! Vous risquez d'atteindre d'informer la gestion de
                  votre parc machines. Pensez à valider les machines et à ces
                  informations.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700">
                  Attention ! Vous risquez d'atteindre d'informer la gestion de
                  votre parc machines. Pensez à valider les machines et à ces
                  informations.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom illustration */}
          <div className="mt-8">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-xs text-gray-600">Ressources en recrutement</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default LogisticsDashboard;
