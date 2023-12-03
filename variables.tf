variable "resource_group_name" {
  description = "The name of the resource group"
  type        = string
  default     = "rsgroup" 
}

variable "location" {
  description = "The location/region in which to create the resources"
  type        = string
  default     = "France Central" 
}

variable "cluster_name" {
  description = "The name of the AKS cluster"
  type        = string
  default     = "myAKSCluster" 
}

variable "dns_prefix" {
  description = "DNS prefix for the AKS cluster"
  type        = string
  default     = "myaksclusterdns" 
}

variable "node_count" {
  description = "Number of nodes in the AKS cluster"
  type        = number
  default     = 2
}
