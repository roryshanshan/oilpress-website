#!/bin/bash

# Script to translate common English phrases to French in docs/fr directory

find docs/fr -name "*.md" -type f | while read file; do
    # Replace common English headings with French equivalents
    sed -i '' 's/## Technical Advantages/## Avantages Techniques/g' "$file"
    sed -i '' 's/## Product Applications/## Applications des Produits/g' "$file"
    sed -i '' 's/## Quality Standards/## Normes de Qualité/g' "$file"
    sed -i '' 's/## Sustainable Development/## Développement Durable/g' "$file"
    sed -i '' 's/## Contact Us/## Contactez-nous/g' "$file"
    sed -i '' 's/## Product Features/## Caractéristiques du Produit/g' "$file"

    # Replace common English phrases
    sed -i '' 's/Continuous Production/Production Continue/g' "$file"
    sed -i '' 's/Product Quality Standards/Normes de Qualité des Produits/g' "$file"
    sed -i '' 's/Environmental Production/Production Environnementale/g' "$file"
    sed -i '' 's/Waste recycling and utilization/Recyclage et utilisation des déchets/g' "$file"
    sed -i '' 's/Energy-saving and emission-reduction processes/Processus d'\''économie d'\''énergie et de réduction d'\''émissions/g' "$file"
    sed -i '' 's/Green production standards/Normes de production verte/g' "$file"
    sed -i '' 's/Resource Utilization/Utilisation des Ressources/g' "$file"
    sed -i '' 's/By-product comprehensive utilization/Utilisation complète des sous-produits/g' "$file"
    sed -i '' 's/Industrial chain extension/Extension de la chaîne industrielle/g' "$file"
    sed -i '' 's/Circular economy model/Modèle d'\''économie circulaire/g' "$file"
    sed -i '' 's/Social Responsibility/Responsabilité Sociale/g' "$file"
    sed -i '' 's/Support farmer income increase/Soutien à l'\''augmentation des revenus des agriculteurs/g' "$file"
    sed -i '' 's/Ensure food safety/Assurer la sécurité alimentaire/g' "$file"
    sed -i '' 's/Protect ecological environment/Protéger l'\''environnement écologique/g' "$file"

    # Additional replacements for remaining English content
    sed -i '' 's/By-products/Sous-produits/g' "$file"
    sed -i '' 's/High-quality protein feed/Aliment protéique de haute qualité/g' "$file"
    sed -i '' 's/Waste recycling utilization/Recyclage et utilisation des déchets/g' "$file"
    sed -i '' 's/Energy saving and emission reduction processes/Processus d'\''économie d'\''énergie et de réduction d'\''émissions/g' "$file"

    # More specific replacements
    sed -i '' 's/Processing Technology/Technologie de Transformation/g' "$file"
    sed -i '' 's/Step 2: Hydraulic oil press pressing/Étape 2: Pressage de presse à huile hydraulique/g' "$file"
    sed -i '' 's/The hazelnut oil produced by this process/L'\''huile de noisette produite par ce processus/g' "$file"
    sed -i '' 's/Perilla seeds go through screening/Les graines de périlla passent par le criblage/g' "$file"
    sed -i '' 's/Apricot oil cold pressing process/Processus de pressage à froid d'\''huile d'\''abricot/g' "$file"
    sed -i '' 's/FruitVegProcessing Series/Série Traitement Fruits et Légumes/g' "$file"
    sed -i '' 's/DairyProcessing Series/Série Traitement Laitier/g' "$file"
    sed -i '' 's/Storage Conditions/Conditions de Stockage/g' "$file"
    sed -i '' 's/Automated production process/Processus de production automatisé/g' "$file"
    sed -i '' 's/24-hour uninterrupted operation/Fonctionnement ininterrompu 24 heures/g' "$file"
    sed -i '' 's/Automated roasting system/Système de torréfaction automatisé/g' "$file"
    sed -i '' 's/Automated feeding and discharging/Alimentation et déchargement automatisés/g' "$file"
    sed -i '' 's/Intelligent fault alarm/Alarme de panne intelligente/g' "$file"

    # Step translations
    sed -i '' 's/Step 1:/Étape 1:/g' "$file"
    sed -i '' 's/Step 2:/Étape 2:/g' "$file"
    sed -i '' 's/Step 3:/Étape 3:/g' "$file"
    sed -i '' 's/High-speed crushing/Broyage à haute vitesse/g' "$file"
    sed -i '' 's/Steaming/Cuisson à la vapeur/g' "$file"
    sed -i '' 's/Pressing/Pressage/g' "$file"
    sed -i '' 's/Crushing/Broyage/g' "$file"
    sed -i '' 's/Frying/Friture/g' "$file"
    sed -i '' 's/Grinding \+ stirring/Broyage \+ mélange/g' "$file"
    sed -i '' 's/High-temperature steaming/Cuisson à la vapeur à haute température/g' "$file"
    sed -i '' 's/Hydraulic oil press pressing/Pressage de presse à huile hydraulique/g' "$file"

    echo "Processed: $file"
done

echo "Translation completed!"