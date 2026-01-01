# Test Technique : Intégration PayDunya Checkout
Ce projet est une application full-stack démontrant l'intégration de la solution de paiement PayDunya Checkout. Elle permet de simuler un parcours d'achat complet, de l'authentification à la redirection vers la plateforme de paiement sécurisée.


## Structure du Projet
backend/ : API REST développée avec Spring Boot 3.4.1.

frontend/ : Interface utilisateur moderne développée avec Next.js 14+ et TypeScript.

## Stack Technique
**Backend**
Java 17 & Spring Boot 3.4.1.

Maven pour la gestion des dépendances.

SDK PayDunya Java (Neptune) : Intégré via un JAR local situé dans backend/libs/.

Lombok : Pour un code propre et concis.

**Frontend**
Next.js (App Router).

TypeScript pour la sécurité du typage.

Tailwind CSS pour une interface responsive et moderne.

## Installation et Configuration
**Backend**
Accédez au dossier : cd backend.

Créez le fichier de configuration :

Copiez src/main/resources/application.properties.example vers src/main/resources/application.properties.

Renseignez vos clés API PayDunya (Master Key, Private Key, Token).

L'application est configurée pour s'exécuter sans base de données (JDBC/JPA désactivés) pour simplifier le test.

Lancez le serveur :
mvn clean install
mvn spring-boot:run

Le serveur sera disponible sur http://localhost:8080

**Frontend**
- Accédez au dossier : cd frontend.

- Installez les dépendances : npm install


- Lancez le mode développement :npm run dev
L'interface sera accessible sur http://localhost:3000

## Parcours Utilisateur
Authentification : Une page de connexion simple acceptant n'importe quel identifiant fictif.

Catalogue : Présentation du produit de test ("Laptop Pro" à 500 000 XOF).

Récapitulatif : Visualisation des détails avant l'achat.

Paiement : Redirection automatique vers la page de paiement sécurisée de PayDunya via l'API.

Note de Simulation : Pour valider un paiement en mode Sandbox, utilisez l'email isaac.djidenou@paydunya.com et le mot de passe 91Mechack sur l'interface PayDunya.

## Points Clés de l'Implémentation
Custom Data : Le backend transmet le nom et la référence du produit à PayDunya via les métadonnées personnalisées.

Webhook : Une URL de notification (callback) est configurée dans le service pour recevoir les confirmations de paiement.

Sécurité : Les clés API sensibles sont exclues du dépôt via .gitignore.