'use client';
import React, { useState } from 'react';

const UnitConverter = () => {
    const [value, setValue] = useState('');
    const [convertedValue, setConvertedValue] = useState('');
    const [unitFrom, setUnitFrom] = useState('meters');
    const [unitTo, setUnitTo] = useState('feet');
    // Length conversion rates
    const lengthConversions = {
        feet: { meters: 0.3048, kilometers: 0.0003048, miles: 0.000189394, inches: 12, centimeters: 30.48 },
        meters: { feet: 3.28084, kilometers: 0.001, miles: 0.000621371, inches: 39.3701, centimeters: 100 },
        kilometers: { feet: 3280.84, meters: 1000, miles: 0.621371, inches: 39370.1, centimeters: 100000 },
        miles: { feet: 5280, meters: 1609.34, kilometers: 1.60934, inches: 63360, centimeters: 160934 },
        inches: { feet: 1/12, meters: 0.0254, kilometers: 0.0000254, miles: 0.0000157828, centimeters: 2.54 },
        centimeters: { feet: 0.0328084, meters: 0.01, kilometers: 0.00001, miles: 0.0000062137, inches: 0.393701 },
    };

    // Weight conversion rates
    const weightConversions = {
        pounds: { kilograms: 0.453592, grams: 453.592, ounces: 16 },
        kilograms: { pounds: 2.20462, grams: 1000, ounces: 35.274 },
        ounces: { pounds: 0.0625, kilograms: 0.0283495, grams: 28.3495 },
        grams: { pounds: 0.00220462, kilograms: 0.001, ounces: 0.035274 },
    };

    const tempConversions = {
        celsius: { fahrenheit: 32, kelvin: 273.15 },
        fahrenheit: { celsius: -17.7778, kelvin: 255.9278 },
        kelvin: { celsius: -272.15, fahrenheit: -457.87 },
    }
    const [unitsTo, setUnitsTo] = useState(lengthConversions);
    // Temperature conversion functions
    const convertTemperature = (value, fromUnit, toUnit) => {
        if (fromUnit === 'celsius') {
            if (toUnit === 'fahrenheit') return (value * 9/5) + 32;
            if (toUnit === 'kelvin') return value + 273.15;
        }
        if (fromUnit === 'fahrenheit') {
            if (toUnit === 'celsius') return (value - 32) * 5/9;
            if (toUnit === 'kelvin') return (value - 32) * 5/9 + 273.15;
        }
        if (fromUnit === 'kelvin') {
            if (toUnit === 'celsius') return value - 273.15;
            if (toUnit === 'fahrenheit') return (value - 273.15) * 9/5 + 32;
        }
        return value; // Return the same value if units are the same
    };

    const convertUnits = () => {
        let result;
        if (unitFrom in lengthConversions && unitTo in lengthConversions[unitFrom]) {
            result = (value * lengthConversions[unitFrom][unitTo]).toFixed(2);
        } else if (unitFrom in weightConversions && unitTo in weightConversions[unitFrom]) {
            result = (value * weightConversions[unitFrom][unitTo]).toFixed(2);
        } else if (['celsius', 'fahrenheit', 'kelvin'].includes(unitFrom) && ['celsius', 'fahrenheit', 'kelvin'].includes(unitTo)) {
            result = convertTemperature(value, unitFrom, unitTo).toFixed(2);
        } else {
            result = value; // No conversion needed
        }
        setConvertedValue(result);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Unit Converter</h3>
                <div className="flex mb-4">
                    <select
                        value={unitFrom}
                        onChange={(e) => {
                            setUnitFrom(e.target.value)
                            if(unitFrom in lengthConversions) {
                                setUnitsTo(lengthConversions)
                                setUnitTo('feet')
                            } else if(unitFrom in weightConversions) {
                                setUnitsTo(weightConversions)
                                setUnitTo('pounds')
                            }else if(unitFrom in tempConversions) {
                                setUnitsTo(tempConversions)
                                setUnitTo('celsius')
                            }
                        }}
                        className="bg-gray-700 text-white border border-gray-600 rounded p-2 mr-2"
                    >
                        {/* Length Units */}
                        <option value="feet">Feet</option>
                        <option value="meters">Meters</option>
                        <option value="kilometers">Kilometers</option>
                        <option value="miles">Miles</option>
                        <option value="inches">Inches</option>
                        <option value="centimeters">Centimeters</option>
                        {/* Weight Units */}
                        <option value="pounds">Pounds</option>
                        <option value="kilograms">Kilograms</option>
                        <option value="ounces">Ounces</option>
                        <option value="grams">Grams</option>
                        {/* Temperature Units */}
                        <option value="celsius">Celsius</option>
                        <option value="fahrenheit">Fahrenheit</option>
                        <option value="kelvin">Kelvin</option>
                    </select>
                    <input 
                        type="number" 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        placeholder={`Enter value in ${unitFrom}`}
                        className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
                    />
                </div>
                <div className="flex mb-4" >
                    <select
                        value={unitTo}
                        onChange={(e) => setUnitTo(e.target.value)}
                        style={{textTransform: 'capitalize'}}
                        className="bg-gray-700 text-white border border-gray-600 rounded p-2 mr-2"
                    >
                      {Object.keys(unitsTo).map((unit) => (
                        <option style={{textTransform: 'capitalize'}} key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                    <button 
                        onClick={convertUnits} 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
                    >
                        Convert
                    </button>
                </div>
                {convertedValue === '' ? <p className="mt-4">Enter a value to convert.</p>:
                <p className="mt-4">Converted Value: {convertedValue}</p>
                }
            </div>
        </div>
    );
};

export default UnitConverter;
