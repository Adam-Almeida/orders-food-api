import { useState } from "react";
import { FlatList } from "react-native";

import { Category } from "../../types/Categories";
import { Text } from "../Text";
import { Category as CategoryContainer, Icon } from "./styles";

interface CategoryPropos {
    categories: Category[];
    onSelectedCategory: (categoryId: string) => Promise<void>;
}

export function Categories({ categories,onSelectedCategory }: CategoryPropos) {
    const [selectedCategory, setSelectedCategory] = useState("");

    function handleSelectCategory(categoryId: string) {
        const category = selectedCategory === categoryId ? "" : categoryId;
        onSelectedCategory(category);
        setSelectedCategory(category);
    }

    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{ paddingRight: 24 }}
            data={categories}
            keyExtractor={(category) => category._id}
            renderItem={({ item: category }) => {
                const isSelected = selectedCategory === category._id;

                return (
                    <CategoryContainer
                        onPress={() => handleSelectCategory(category._id)}
                    >
                        <Icon>
                            <Text opacity={isSelected ? 1 : 0.5}>
                                {category.icon}
                            </Text>
                        </Icon>
                        <Text
                            opacity={isSelected ? 1 : 0.5}
                            size={13}
                            weight="600"
                        >
                            {category.name}
                        </Text>
                    </CategoryContainer>
                );
            }}
        />
    );
}
