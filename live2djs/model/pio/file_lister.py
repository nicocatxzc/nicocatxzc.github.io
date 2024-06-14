import os
import json

def list_files_in_folder(folder_name):
    # 创建一个字典来存储文件夹名称和文件列表
    folder_dict = {folder_name: []}
    
    # 遍历指定文件夹中的所有文件和子文件夹
    for root, dirs, files in os.walk(folder_name):
        for file in files:
            # 构建文件路径，并将反斜杠替换为正斜杠
            file_path = os.path.join(root, file).replace('\\', '/')
            # 将文件路径添加到列表中
            folder_dict[folder_name].append(file_path)
    
    # 将结果写入JSON文件
    with open('file_list.json', 'w', encoding='utf-8') as json_file:
        json.dump(folder_dict, json_file, ensure_ascii=False, indent=4)

# 输入文件夹名称
folder_input = input("请输入文件夹名称: ")
list_files_in_folder(folder_input)
