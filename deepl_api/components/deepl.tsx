import * as deepl from 'deepl-node';

export default function Deepltranslater() {
    const authKey = ("auth_key");
    const translator = new deepl.Translator(authKey);
    return(
        async () => {
            const result = await translator.translateText(
                'Hello, world!', 
                null, 
                'ja',
            );
        console.log(result.text); // Bonjour, le monde !
        }
    )  
};
