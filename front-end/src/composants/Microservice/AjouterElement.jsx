import { useState } from 'react';
import axios from 'axios';

export default function AjouterElement() {
    const [noms, setNoms] = useState([
        "Alice", "Bob", "Charlie", "Diana", "Ethan", "Fanny", "Gabriel", "Hannah", "Isaac", "Julia",
        "Kevin", "Lily", "Mateo", "Nina", "Olivia"
    ]);

    const [choix, setChoix] = useState([]);

    const [nouveauChoixNom, setNouveauChoixNom] = useState('');

    const handleCheckboxChange = (nom, choixIndex) => {
        const newChoix = [...choix];
        newChoix[choixIndex] = { ...newChoix[choixIndex] };
        newChoix[choixIndex].nomsChoisis = [...newChoix[choixIndex].nomsChoisis];
        const index = newChoix[choixIndex].nomsChoisis.indexOf(nom);
        if (index === -1) {
            newChoix[choixIndex].nomsChoisis.push(nom);
        } else {
            newChoix[choixIndex].nomsChoisis.splice(index, 1);
        }
        setChoix(newChoix);
    };

    const handleAjouterChoix = () => {
        if (nouveauChoixNom.trim() !== '') {
            setChoix([...choix, { nom: nouveauChoixNom, nomsChoisis: [] }]);
        }
        setNouveauChoixNom('');
    };

    const handleRenameChoix = (index, nouveauNom) => {
        const newChoix = [...choix];
        newChoix[index] = { ...newChoix[index], nom: nouveauNom };
        setChoix(newChoix);
    };

    const getListeChoix = (index) => {
        return choix[index].nomsChoisis.join(', ');
    };

    const handleValider = async () => {
        const listeObjets = [];
        choix.forEach((item, index) => {
            item.nomsChoisis.forEach((nom) => {
                listeObjets.push({
                    id: index + 1,
                    Nom_user: nom,
                    Choix: item.nom
                });
            });
        });
        console.log(listeObjets)

        // Envoi de la liste à l'API avec Axios
        try {
            const response = await axios.post('http://127.0.0.1:8008/api/Test', listeObjets);
            console.log(response)
            console.log('Données envoyées avec succès !', response.data);
        } catch (error) {
            console.error("Echec de l'envoi des données :", error.message);
        }
    };

    return (
        <div className="main-container" style={{color:'black'}}>
            <h1>Tableau avec 25 noms et cases à cocher</h1>
            <div>
                <label>
                    Nom du nouveau choix :
                    <input
                        type="text"
                        value={nouveauChoixNom}
                        onChange={(e) => setNouveauChoixNom(e.target.value)}
                    />
                </label>
                <button onClick={handleAjouterChoix}>Ajouter un choix</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        {choix.map((item, index) => (
                            <th key={index}>
                                <input
                                    type="text"
                                    value={item.nom}
                                    onChange={(e) => handleRenameChoix(index, e.target.value)}
                                />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {noms.map((nom) => (
                        <tr key={nom}>
                            <td>{nom}</td>
                            {choix.map((item, choixIndex) => (
                                <td key={choixIndex}>
                                    <input
                                        type="checkbox"
                                        checked={item.nomsChoisis.includes(nom)}
                                        onChange={() => handleCheckboxChange(nom, choixIndex)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {choix.map((item, index) => (
                <p key={index}>Noms sélectionnés pour Choix {item.nom}: {getListeChoix(index)}</p>
            ))}
            <button onClick={handleValider}>Valider</button>
        </div>
    );
}
