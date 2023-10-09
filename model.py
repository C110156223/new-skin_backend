from PIL import Image
import torch
import torchvision
import sys
device = torch.device("cuda" if torch.cuda.is_available() else 'cpu ')
print(device)

def model(path):
    img_path = path 
    image = Image.open(img_path)

    transform = torchvision.transforms.Compose([torchvision.transforms.Resize((32,32)),
                                            torchvision.transforms.ToTensor()])

    test_image = transform(image)
    # print(test_image)

    # model = torch.load("fig_RES101_NEW/best_model_weights.pt")

    res101 = torchvision.models.resnet101(weights = None)
    res101.load_state_dict(torch.load("best_model_weights.pt"))
    # print(res101)

    test_image = torch.reshape(test_image,(1,3,32,32))
    res101.eval()
    with torch.no_grad():
        output = res101(test_image)
    return(output.argmax())
# path=sys.argv[1]
path = "07AcnePittedScars_0.jpg"
print(model(path))





