import React, { createContext, useState, useEffect } from 'react';

// Creating context
export const LanguagesContext = createContext();

const LanguageProvider = ({ children }) => {
    const translations = {
        English: { 
            greeting: 'Good morning', 
            subtitle: 'Long time no see',
            searchPlaceholder: 'Search...',
            overview: 'Overview',
            transactionAmount: 'Your transaction amount',
            transactions: 'Transactions',
            transaction: 'Transaction',
            settings: 'Settings',
            accountSettings: 'Account Settings',
            currency: 'Currency',
            language: 'Language',
            darkMode: 'Dark Mode',
            addTransaction: 'Add Transaction',
            logout: 'Logout' // Added translation
        },
        Spanish: { 
            greeting: 'Buenos días', 
            subtitle: 'Mucho tiempo sin verte',
            searchPlaceholder: 'Buscar...',
            overview: 'Visión general',
            transactionAmount: 'El monto de tu transacción',
            transactions: 'Transacciones',
            transaction: 'Transacción',
            settings: 'Configuraciones',
            accountSettings: 'Configuración de la cuenta',
            currency: 'Moneda',
            language: 'Idioma',
            darkMode: 'Modo oscuro',
            addTransaction: 'Agregar transacción',
            logout: 'Cerrar sesión' // Added translation
        },
        French: { 
            greeting: 'Bonjour', 
            subtitle: 'Ça fait longtemps',
            searchPlaceholder: 'Rechercher...',
            overview: 'Vue d\'ensemble',
            transactionAmount: 'Le montant de votre transaction',
            transactions: 'Transactions',
            transaction: 'Transaction',
            settings: 'Paramètres',
            accountSettings: 'Paramètres du compte',
            currency: 'Devise',
            language: 'Langue',
            darkMode: 'Mode sombre',
            addTransaction: 'Ajouter une transaction',
            logout: 'Se déconnecter' // Added translation
        },
        German: { 
            greeting: 'Guten Morgen', 
            subtitle: 'Lange nicht gesehen',
            searchPlaceholder: 'Suchen...',
            overview: 'Übersicht',
            transactionAmount: 'Ihr Transaktionsbetrag',
            transactions: 'Transaktionen',
            transaction: 'Transaktion',
            settings: 'Einstellungen',
            accountSettings: 'Kontoeinstellungen',
            currency: 'Währung',
            language: 'Sprache',
            darkMode: 'Dunkelmodus',
            addTransaction: 'Transaktion hinzufügen',
            logout: 'Abmelden' // Added translation
        },
        Nepali: { 
            greeting: 'शुभ प्रभात', 
            subtitle: 'धेरै समय भयो भेटेको छैन',
            searchPlaceholder: 'खोज्नुहोस्...',
            overview: 'समीक्षा',
            transactionAmount: 'तपाईंको लेनदेन राशि',
            transactions: 'लेनदेन',
            transaction: 'लेनदेन',
            settings: 'सेटिङहरू',
            accountSettings: 'खाता सेटिङ',
            currency: 'मुद्रा',
            language: 'भाषा',
            darkMode: 'अंधकार मोड',
            addTransaction: 'लेनदेन थप्नुहोस्',
            logout: 'लगआउट' // Added translation
        }
    };
    
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'English');
    
    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);
    
    return (
        <LanguagesContext.Provider value={{ language, setLanguage, translations }}>
            {children}
        </LanguagesContext.Provider>
    );
};

export default LanguageProvider;
