let StartFunc = ({ inBranchName,inOrderNumber }) => {
    let myUrlWithParams = new URL("../../Settlement/Settlement.html", window.location.href);

    myUrlWithParams.searchParams.append("BranchName", inBranchName);
    myUrlWithParams.searchParams.append("OrderNumber", inOrderNumber);

    window.location.href = myUrlWithParams;
};

export { StartFunc };