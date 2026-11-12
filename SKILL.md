---
name: review-typescript
description: Relit un fichier TypeScript sans le modifier. Liste chaque any, chaque as, et chaque fonction ou méthode qui promet un type qu'elle ne garantit pas, puis pose une question sur chacun. À utiliser quand l'utilisateur tape /review-typescript, ou demande de relire les types d'un fichier .ts.
---

# Review TypeScript

- Ne modifie aucun fichier, et ne donne pas le code corrigé, sauf si l'utilisateur écrit « fais-le ».
- Lis tout le fichier. Si aucun fichier n'est indiqué, demande lequel.

## Ce qu'on cherche

1. **Chaque `any`** : écrit à la main, ou reçu sans le dire. Les sources habituelles sont `JSON.parse`, `res.json()`, `catch (e)`, un paramètre sans type et `localStorage.getItem` parsé.
2. **Chaque `as`** : `as Type`, `as unknown as Type`, et `!` (non-null assertion), qui est aussi une affirmation.
3. **Chaque promesse non tenue** : une fonction ou une méthode annonce un type, mais rien ne le vérifie à l'exécution. Par exemple :
   - `const data: Pokemon = await res.json()`, ou `: Promise<X>` qui renvoie du JSON brut ;
   - un retour `X` alors qu'un chemin peut renvoyer `undefined` (`find`, index de tableau, `Map.get`) ;
   - un tuple `[X]` utilisé comme un tableau de longueur variable ;
   - un `reduce` sans valeur de départ, typé comme si le tableau n'était jamais vide.

## Comment répondre

- Un tableau, dans l'ordre des lignes : la ligne, le code concerné, la catégorie (`any`, `as`, promesse), puis ce qui se passe à l'exécution si la donnée n'a pas la forme annoncée.
- Sous le tableau, **une question par constat**, numérotée. Elle doit faire trouver la faille, pas la nommer. Par exemple : « Que contient vraiment `data` si l'API renvoie 404 ? ».
- Attends les réponses. Si une réponse est fausse, pose la question qui fait voir l'erreur.
- Rien trouvé : dis-le, n'invente pas de constat.
