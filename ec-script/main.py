from argparse import ArgumentParser
import pandas as pd

def match_search(search_term):
    camera_list = pd.read_csv('data/cameras-defb.csv', sep=';')

    return camera_list[camera_list['Camera'].str.contains(search_term)]


def main():
    parser = ArgumentParser()
    parser.add_argument("search_term")
    args = parser.parse_args()

    filtered_cameras = match_search(args.search_term)
    print(filtered_cameras)


if __name__ == '__main__':
    main()
