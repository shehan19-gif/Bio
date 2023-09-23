export default async function fetchSecrets() {
    const responseData = async () => {
        const response = await fetch('/message');
        const data = await response.json();
        const secret = data;
        return secret;
    };

    return responseData();
}